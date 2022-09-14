import { useEffect, useState } from "react";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";

const REGION = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_REGION;
const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
const BUCKET_URL = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_URL;

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

const useUploadS3 = (session) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session && session.user && session.user.image) {
      setImageUrl(session.user.image);
    }
  }, [session]);

  const uploadS3 = async (file) => {
    setIsLoading(true);

    const bucketParams = {
      ACL: "public-read",
      Bucket: BUCKET_NAME,
      Key: file.name,
      Body: file,
    };

    try {
      await s3Client.send(new PutObjectCommand(bucketParams));
      setImageUrl(`${BUCKET_URL}/${file.name}`);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  return {
    imageUrl,
    uploadS3,
    isLoading,
  };
};

export default useUploadS3;
