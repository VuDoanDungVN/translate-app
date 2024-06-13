'use client';
import { Box, Grid, Tooltip, Typography, colors } from '@mui/material';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextareaAutosize } from '@mui/base';
import Paper from '@mui/material/Paper';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Link from 'next/link';

const cssPaperCard = {
  borderRadius: 1,
  padding: 1,
  backgroundColor: '#fff',
  transition: 'background-color 0.3s',
};
const cssPaperCardText = {
  borderRadius: 1,
  backgroundColor: '#fff',
  height: 150,
  padding: 3,
  color: '#f34d19',
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
};
const cssContent = {
  display: 'flex',
  justifyContent: 'space-between',
};
const TextContentCss = {
  color: '#516164',
  margin: '10px 0px',
};
const CssCardContent = {
  marginBottom: '20px',
};
const CssTextBottom = {
  display: 'flex',
  justifyContent: 'flex-end',
  color: '#516164',
  padding: '30px 5px 0px 0px',
};
const IconCss = {
  color: '#516164',
  fontSize: 15,
};
const cssContentKanji = {
  display: 'block',
  alignItems: 'center',
  color: '#516164',
  fontSize: 10,
};
const FormTextArea = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const TextAreaCss = {
  width: '50%',
  height: 100,
  margin: 'auto 10px',
  padding: 10,
  color: '#516164',
  fontSize: '15px',
};
export default function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={cssPaperCard}>
            <Typography variant='h6' style={{ color: colors.grey[500] }}>
              Từ vựng hàng ngày :
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={cssCard}>
          <Grid container spacing={2} sx={CssCardContent}>
            <Grid item xs={12} md={3}>
              <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
                <Paper sx={cssPaperCardText}>
                  <Grid item xs={12} sx={cssContent}>
                    <Typography variant='h6'>影響</Typography>
                    <VolumeUpIcon sx={IconCss} />
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>えいきょう</Typography>
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng</Typography>
                  </Grid>
                </Paper>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={3}>
              <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
                <Paper sx={cssPaperCardText}>
                  <Grid item xs={12} sx={cssContent}>
                    <Typography variant='h6'>影響</Typography>
                    <VolumeUpIcon sx={IconCss} />
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>えいきょう</Typography>
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng</Typography>
                  </Grid>
                </Paper>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={3}>
              <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
                <Paper sx={cssPaperCardText}>
                  <Grid item xs={12} sx={cssContent}>
                    <Typography variant='h6'>影響</Typography>
                    <VolumeUpIcon sx={IconCss} />
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>えいきょう</Typography>
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng</Typography>
                  </Grid>
                </Paper>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={3}>
              <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
                <Paper sx={cssPaperCardText}>
                  <Grid item xs={12} sx={cssContent}>
                    <Typography variant='h6'>影響</Typography>
                    <VolumeUpIcon sx={IconCss} />
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>えいきょう</Typography>
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng</Typography>
                  </Grid>
                </Paper>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
                <Paper sx={cssPaperCardText}>
                  <Grid item xs={12} sx={cssContent}>
                    <Typography variant='h6'>影響</Typography>
                    <VolumeUpIcon sx={IconCss} />
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>えいきょう</Typography>
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng</Typography>
                  </Grid>
                </Paper>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={3}>
              <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
                <Paper sx={cssPaperCardText}>
                  <Grid item xs={12} sx={cssContent}>
                    <Typography variant='h6'>影響</Typography>
                    <VolumeUpIcon sx={IconCss} />
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>えいきょう</Typography>
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng</Typography>
                  </Grid>
                </Paper>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={3}>
              <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
                <Paper sx={cssPaperCardText}>
                  <Grid item xs={12} sx={cssContent}>
                    <Typography variant='h6'>影響</Typography>
                    <VolumeUpIcon sx={IconCss} />
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>えいきょう</Typography>
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng</Typography>
                  </Grid>
                </Paper>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={3}>
              <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
                <Paper sx={cssPaperCardText}>
                  <Grid item xs={12} sx={cssContent}>
                    <Typography variant='h6'>影響</Typography>
                    <VolumeUpIcon sx={IconCss} />
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>えいきょう</Typography>
                  </Grid>
                  <Grid container sx={TextContentCss}>
                    <Typography>Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng</Typography>
                  </Grid>
                </Paper>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={CssTextBottom}>
            <Link href='/home'>
              <Typography>Xem thêm</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={cssCard}>
        <Grid container spacing={2} sx={CssCardContent}>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title='Ảnh hưởng, sự ảnh hưởng, cái ảnh hưởng'>
              <Paper sx={cssPaperCardTextKanji}>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '30px' }}>日</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '15px' }}>NHẬT</Typography>
                </Grid>
              </Paper>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
