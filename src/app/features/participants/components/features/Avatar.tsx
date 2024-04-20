import Image from 'next/image';
import React from 'react'

type AvatarProps = {
    path: string;
    size: number;
    className?: string;
    alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    path,
    size,
    className,
    alt
}) => {
    return (
        <div>
            <Image src={path} width={size} height={size} className={className} alt={alt || "image"}/>
        </div>
    );
};

export default Avatar