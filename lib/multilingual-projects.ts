import { getDictionary } from './dictionaries'
import { allProjectsData, type ProjectData } from './all-projects-data'
import type { Locale } from '../i18n.config'

export interface TranslatedProjectData extends Omit<ProjectData, 'title' | 'description'> {
  title: string
  description: string
}

/**
 * Get project data with translations applied based on the current locale
 */
export async function getTranslatedProjects(locale: Locale): Promise<TranslatedProjectData[]> {
  const dict = await getDictionary(locale)
  
  return allProjectsData.map(project => {
    // Get translation from dictionary if available, otherwise use original
    const translation = dict.projects?.[project.id as keyof typeof dict.projects]
    
    return {
      ...project,
      title: translation?.title || project.title,
      description: translation?.description || project.description
    }
  })
}

/**
 * Get a single translated project by ID
 */
export async function getTranslatedProjectById(
  id: string,
  locale: Locale
): Promise<TranslatedProjectData | undefined> {
  const projects = await getTranslatedProjects(locale)
  return projects.find(project => project.id === id)
}

/**
 * Get translated projects by category
 */
export async function getTranslatedProjectsByCategory(
  category: string,
  locale: Locale
): Promise<TranslatedProjectData[]> {
  const projects = await getTranslatedProjects(locale)
  return projects.filter(project => project.category === category)
}

/**
 * Get translated featured projects
 */
export async function getTranslatedFeaturedProjects(
  locale: Locale
): Promise<TranslatedProjectData[]> {
  const projects = await getTranslatedProjects(locale)
  return projects.filter(project => project.featured)
}

/**
 * Get translated projects by location
 */
export async function getTranslatedProjectsByLocation(
  location: string,
  locale: Locale
): Promise<TranslatedProjectData[]> {
  const projects = await getTranslatedProjects(locale)
  return projects.filter(project => 
    project.location.toLowerCase().includes(location.toLowerCase())
  )
}