import { IconButton } from 'rsuite'
import FileUploadIcon from '@rsuite/icons/FileUpload';

export default function Export({onExport}) {
  return (
    <IconButton icon={<FileUploadIcon /> } onClick={onExport}>Export</IconButton>
  )
}
