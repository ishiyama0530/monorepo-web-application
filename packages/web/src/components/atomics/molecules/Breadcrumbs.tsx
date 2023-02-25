import { Breadcrumbs as BreadcrumbsOriginal, Typography } from '@mui/material'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { DeepReadonly } from 'ts-essentials'

export type Crumb = {
  text: string
  to: NavLinkProps['to']
}

export type BreadcrumbsProps = {
  items: Crumb[]
}

export const Breadcrumbs = ({ items }: DeepReadonly<BreadcrumbsProps>) => (
  <BreadcrumbsOriginal separator="›" aria-label="breadcrumb">
    {items.map(({ text, to }, idx) => (
      <NavLink to={to} key={idx}>
        <Typography variant="body2">{text}</Typography>
      </NavLink>
    ))}
  </BreadcrumbsOriginal>
)
