import { File, File_Service_Enum, File_Type_Enum } from '@gql/schema';

type FileType = Pick<File, 'id' | 'path' | 'service' | 'type'>;

const fileTypeMap = {
  image: [File_Type_Enum.Jpeg, File_Type_Enum.Jpg, File_Type_Enum.Png],
  video: [File_Type_Enum.Mp4],
};

const urlBuilder: Record<File_Service_Enum, (path: string) => string> = {
  [File_Service_Enum.Cloudinary]: (path) => path,
  [File_Service_Enum.Url]: (path) => path,
};

const keys = Object.keys(fileTypeMap) as Array<keyof typeof fileTypeMap>;

export function getFileConfigByServiceAndTypes(
  file: FileType | undefined | null
) {
  if (!file) {
    return {};
  }
  const type = keys.find((key) => fileTypeMap[key].includes(file.type));
  const url = urlBuilder[file.service](file.path);

  return { type, url };
}
