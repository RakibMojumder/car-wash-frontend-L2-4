import { ChangeEvent, Dispatch, useState } from "react";

type TFileInputProps = {
  src: string | undefined;
  setValue: Dispatch<React.SetStateAction<File | undefined>>;
};

const FileInput = ({ src, setValue }: TFileInputProps) => {
  const [photo, setPhoto] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setValue(file);
      setPhoto(url);
    }
  };

  return (
    <div className="cursor-pointer relative flex items-center justify-center">
      <img
        src={photo ? photo : src}
        alt="image upload"
        className="size-24 rounded-full border"
      />
      <input
        type="file"
        name="photo"
        onChange={handleChange}
        required={!src}
        className="absolute top-0 left-0 h-full w-full opacity-0"
      />
    </div>
  );
};

export default FileInput;
