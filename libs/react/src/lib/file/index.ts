import {
  File as HasuraFile,
  File_Service_Enum,
  File_Type_Enum,
} from '@gql/schema';

import {
  CLOUDINARY_RES_IMAGE_URL,
  CLOUDINARY_RES_VIDEO_URL,
} from '../cloudinary';

type FileType = Pick<HasuraFile, 'id' | 'path' | 'service' | 'type'>;

const fileTypeMap = {
  image: [File_Type_Enum.Jpg, File_Type_Enum.Png],
  video: [File_Type_Enum.Mp4],
};

const urlBuilder: Record<File_Service_Enum, (file: FileType) => string> = {
  [File_Service_Enum.Cloudinary]: (file) => {
    switch (file.type) {
      case File_Type_Enum.Jpg:
      case File_Type_Enum.Png:
        return `${CLOUDINARY_RES_IMAGE_URL}/${file.path}`;
      case File_Type_Enum.Mp4:
        return `${CLOUDINARY_RES_VIDEO_URL}/${file.path}`;
      default:
        return file.path;
    }
  },
  [File_Service_Enum.Url]: (file) => file.path,
};

const keys = Object.keys(fileTypeMap) as Array<keyof typeof fileTypeMap>;

export function getFileConfigByServiceAndTypes(
  file: FileType | undefined | null
) {
  if (!file) {
    return {};
  }
  const type = keys.find((key) => fileTypeMap[key].includes(file.type));
  const url = urlBuilder[file.service](file);

  return { type, url };
}

export function getHasuraFileType(file: File): File_Type_Enum | undefined {
  switch (file.type) {
    case 'image/png':
      return File_Type_Enum.Png;
    case 'image/jpeg':
    case 'image/jpg':
      return File_Type_Enum.Jpg;
    case 'video/mp4':
      return File_Type_Enum.Mp4;
    default:
      return undefined;
  }
}
