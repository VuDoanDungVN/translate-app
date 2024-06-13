import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useSession } from 'next-auth/react';
import HomeIcon from '@mui/icons-material/Home';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import FolderIcon from '@mui/icons-material/Folder';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AppsIcon from '@mui/icons-material/Apps';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
export default function NavbarMenu() {
  const [open, setOpen] = React.useState(false);
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const { data: session, status } = useSession();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 350,
          bgcolor: 'background.paper',
          padding: '10px 8px',
        }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
        <List component='div' disablePadding>
          <ListItemButton
            style={{ backgroundColor: '#e1e4e7', borderRadius: '5px', alignContent: 'center' }}
            href='/user'
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Trang Chủ' />
          </ListItemButton>
        </List>
        <List component='div' disablePadding>
          <ListItemButton sx={{ margin: '5px 0px 0px 0px', borderRadius: '5px' }} href='/chat'>
            <ListItemIcon>
              <TelegramIcon />
            </ListItemIcon>
            <ListItemText primary='Chat' />
          </ListItemButton>
        </List>
        <List component='div' disablePadding>
          <ListItemButton sx={{ margin: '5px 0px 0px 0px', borderRadius: '5px' }} href='/mailer'>
            <ListItemIcon>
              <MarkEmailUnreadIcon />
            </ListItemIcon>
            <ListItemText primary='Gửi Mail' />
          </ListItemButton>
        </List>
        <List component='div' disablePadding>
          <ListItemButton sx={{ margin: '5px 0px 0px 0px', borderRadius: '5px' }} href='/personal'>
            <ListItemIcon>
              <AutoAwesomeMosaicIcon />
            </ListItemIcon>
            <ListItemText primary='Mẫu' />
          </ListItemButton>
        </List>
        <List component='div' disablePadding>
          <ListItemButton sx={{ margin: '5px 0px 0px 0px', borderRadius: '5px' }} href='/todo'>
            <ListItemIcon>
              <CardGiftcardIcon />
            </ListItemIcon>
            <ListItemText primary='Todo List' />
          </ListItemButton>
        </List>
        <List component='div' disablePadding>
          <ListItemButton sx={{ margin: '5px 0px 0px 0px', borderRadius: '5px' }} href='/personal'>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary='Ứng dụng' />
          </ListItemButton>
        </List>
        <List component='div' disablePadding>
          <ListItemButton sx={{ margin: '5px 0px 0px 0px', borderRadius: '5px' }} href='/personal'>
            <ListItemIcon>
              <FolderDeleteIcon />
            </ListItemIcon>
            <ListItemText primary='Thùng rác' />
          </ListItemButton>
        </List>
      </List>
    </>
  );
}
