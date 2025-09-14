import {differenceInDays, differenceInMonths, differenceInYears} from 'date-fns'

export const formatYouTubeStyleDate = publishedAt => {
  const publishedDate = new Date(publishedAt)
  const now = new Date()

  const years = differenceInYears(now, publishedDate)
  const months = differenceInMonths(now, publishedDate)
  const days = differenceInDays(now, publishedDate)

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`
  }
  if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`
  }
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  }
  return 'Today'
}

export const formatYouTubeStyleDateShort = publishedAt => {
  const publishedDate = new Date(publishedAt)
  const now = new Date()

  const years = differenceInYears(now, publishedDate)
  const months = differenceInMonths(now, publishedDate)
  const days = differenceInDays(now, publishedDate)

  if (years > 0) {
    return `${years}y ago`
  }
  if (months > 0) {
    return `${months}mo ago`
  }
  if (days > 0) {
    return `${days}d ago`
  }
  return 'Today'
}
