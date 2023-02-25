import ListIcon from '@mui/icons-material/List'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PrivateLayout } from '../layout/PrivateLayout'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <PrivateLayout title="HOME">
      <List subheader={<ListSubheader component="div">MENU</ListSubheader>}>
        <ListItemButton onClick={() => navigate('/tickets')}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText
            primary="TICKET LIST"
            secondary="Provides a list of tickets and a link to the ticket details page."
          />
        </ListItemButton>

        <ListItemButton onClick={() => navigate('/users')}>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText
            primary="USER LIST"
            secondary="You can see which users can log in to this system."
          />
        </ListItemButton>
      </List>
    </PrivateLayout>
  )
}

export default HomePage
