import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, Grid2, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo, useRef } from 'react'
import { ImageGallery } from '../components/ImageGallery'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal/thunks'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch()
    const {active:note, messageSaved, isSaving} = useSelector(state => state.journal)

    const {body, title, onInputChange, formState, date} = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }, [date])

    const fileInputRef = useRef()

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire('Nota actualizada', messageSaved, 'succes')
        }
    }, [messageSaved])
    
    
    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return
        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeletingNote())
    }

    return (
        <Grid2 
            className='animate__animated animate__fadeIn animate__faster'
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' 
            sx={{ mb: 1 }}
        >
            <Grid2>
                <Typography fontSize={ 39 } fontWeight='light'>{dateString}</Typography>
            </Grid2>
            <Grid2>

                <input 
                    type='file'
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />

                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>

                <Button 
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color='primary' 
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid2>

            <Grid2 container size={{ xs: 12 }}>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un título'
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Que sucedió en el día de hoy?'
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid2>

            <Grid2 container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{mt: 2}}
                    color='error'
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid2>

            <ImageGallery images={ note.imageUrls }/>

        </Grid2>
    )
}
