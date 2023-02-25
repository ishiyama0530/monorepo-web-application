import { Link, LinkProps } from '@mui/material'

export type ExternalLinkProps = LinkProps

export function ExternalLink(props: Readonly<ExternalLinkProps>) {
  return <Link {...props} rel="noopener noreferrer" />
}
