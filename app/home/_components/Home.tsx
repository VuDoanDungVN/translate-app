'use client';
import { Box, Grid, Typography, colors } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import * as React from 'react';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Vocabulary } from '@/app/_repositories/Vocalbulary';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

type Props = {
  vocabulary: Vocabulary[];
};

const cssPaperCard = {
  borderRadius: 1,
  padding: 1,
  backgroundColor: '#fff',
  transition: 'background-color 0.3s',
};

const cssPaperCardTextKanji = {
  borderRadius: 1,
  backgroundColor: '#fff',
  height: 80,
  width: 80,
  color: '#516164',
};
const cssCard = {
  margin: '0px 10px',
  borderRadius: 1,
  cursor: 'pointer',
};
const CssCardContent = {
  marginBottom: '20px',
};
const CssTextBottom = {
  display: 'flex',
  justifyContent: 'flex-end',
  color: '#516164',
  padding: '30px 5px 0px 0px',
  marginBottom: '20px',
};
const cssPaperCardText = {
  borderRadius: 1,
  backgroundColor: '#fff',
  height: 150,
  padding: 3,
  color: '#f34d19',
};
const cssContent = {
  display: 'flex',
  justifyContent: 'space-between',
  color: '#e40d0d',
};
const TextContentCss = {
  color: '#516164',
  margin: '10px 0px',
  fontSize: 12,
};
const TextContentCssDialog = {
  color: '#325381',
  margin: '10px 0px',
  fontSize: 12,
};
const TextContentCssDialogTitle = {
  color: '#325381',
  fontSize: 20,
  fontWeight: 600,
};
const IconCss = {
  color: '#516164',
  fontSize: 30,
  cursor: 'pointer',
};
const IconCssDialog = {
  color: '#e40d0d',
  fontSize: 20,
  cursor: 'pointer',
};
const DialogContentCss = { width: '100%', color: '#e40d0d' };
const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 15,
  },
});
export default function Home(props: Props) {
  const vocabulary = props.vocabulary;
  const [valueTab, setValueTab] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValueTab: number) => {
    setValueTab(newValueTab);
  };
  const handleSpeak = (text: String) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text as string);
      speechSynthesis.speak(utterance);
    }
  };

  const handleSpeakVietNam = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text as string);

      const speakWithVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log('Available voices:', voices); // Log danh sách các giọng nói

        const vietnameseVoice = voices.find((voice) => voice.lang === 'vi-VN');
        console.log('Vietnamese voice:', vietnameseVoice); // Log giọng nói tiếng Việt (nếu có)

        if (vietnameseVoice) {
          utterance.voice = vietnameseVoice;
        } else {
          console.warn('No Vietnamese voice found, using default voice');
        }

        speechSynthesis.speak(utterance);
      };

      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', speakWithVoice);
      } else {
        speakWithVoice();
      }
    }
  };

  //Dialog box
  const [openDialogCard, setOpenDialogCard] = React.useState(false);
  const handleClickOpenDialogCard = (vocabulary: any) => {
    setCurrentVocabulary(vocabulary);
    setOpenDialogCard(true);
  };
  const handleCloseDialogCard = () => {
    setOpenDialogCard(false);
  };

  // Lưu từ vựng vào một trạng thái và hiển thị ra màn hình
  const [currentVocabulary, setCurrentVocabulary] = React.useState<Vocabulary | null>(null);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={cssPaperCard}>
            <Typography variant='h6' style={{ color: '#516164', marginTop: '10px' }}>
              Từ vựng hàng ngày :
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={cssCard}>
          <Grid container spacing={2} sx={CssCardContent}>
            {vocabulary?.map((vocabulary, index) => (
              <Grid item xs={12} md={3} key={vocabulary.id}>
                <CustomWidthTooltip
                  title={vocabulary.meaning}
                  sx={{ m: 1, fontSize: '1.2em' }}
                  placement='top'
                >
                  <Paper
                    sx={{
                      ...cssPaperCardText,
                      ':hover': { backgroundColor: '#e1e4e7', transition: 0.5, color: '#516164' },
                    }}
                    onClick={() => handleClickOpenDialogCard(vocabulary)}
                  >
                    <Grid item xs={12} sx={cssContent}>
                      <Grid
                        item
                        xs={12}
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          gap: '10px',
                        }}
                      >
                        <Typography>{++index}:</Typography>
                        <Typography>{vocabulary.word}</Typography>
                      </Grid>
                      <VolumeUpIcon
                        sx={IconCss}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleSpeak(vocabulary.word);
                        }}
                      />
                    </Grid>
                    <Grid container sx={TextContentCss}>
                      <Typography>{vocabulary.reading}</Typography>
                    </Grid>
                    <Grid container sx={TextContentCss}>
                      <Typography>{vocabulary.meaning}</Typography>
                    </Grid>
                  </Paper>
                </CustomWidthTooltip>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} sx={CssTextBottom}>
            <Link href='/vocabulary'>
              <Typography>Xem thêm</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={cssCard}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={valueTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label='lab API tabs example'>
                <Tab label='N5' value='1' />
                <Tab label='N4' value='2' />
                <Tab label='N3' value='3' />
                <Tab label='N2' value='4' />
                <Tab label='N1' value='5' />
              </TabList>
            </Box>
            {/**Đây là vị trí code vừa cut */}
          </TabContext>
        </Box>
      </Grid>
      <Grid item xs={12} style={{ width: '500px' }}>
        <Dialog
          open={openDialogCard}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDialogCard}
        >
          <DialogTitle>
            <Grid item xs={12}>
              <Typography sx={TextContentCssDialogTitle}>Ý nghĩa của từ vựng :</Typography>
            </Grid>
          </DialogTitle>
          <DialogContent sx={{ width: '500px', minHeight: '200px' }}>
            <DialogContentText>
              <Grid item xs={12} sx={TextContentCssDialog}>
                <Typography style={{ fontWeight: 600 }}>✍ Phiên âm :</Typography>
                <TableBody>
                  <TableRow sx={{ width: '100%' }}>
                    <TableCell sx={DialogContentCss}>{currentVocabulary?.word}</TableCell>
                    <TableCell align='right'>
                      <VolumeUpIcon
                        sx={IconCssDialog}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleSpeakVietNam(currentVocabulary?.word as string);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Grid>
              <Grid item xs={12} sx={TextContentCssDialog}>
                <Typography style={{ fontWeight: 600 }}>✍ Ý nghĩa :</Typography>
                <TableBody>
                  <TableRow sx={{ width: '100%' }}>
                    <TableCell sx={DialogContentCss}>{currentVocabulary?.meaning}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Grid>
              <Grid item xs={12} sx={TextContentCssDialog}>
                <Typography style={{ fontWeight: 600 }}>✍ Ví dụ :</Typography>
                <TableBody>
                  <TableRow sx={{ width: '100%' }}>
                    <TableCell sx={DialogContentCss}>{currentVocabulary?.example}</TableCell>
                    <TableCell align='right'>
                      <VolumeUpIcon
                        sx={IconCssDialog}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleSpeakVietNam(currentVocabulary?.example as string);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ width: '100%' }}>
                    <TableCell sx={DialogContentCss}>{currentVocabulary?.exampleMeaning}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Grid>
    </Box>
  );
}
