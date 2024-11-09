import React from 'react';
import copyLinkIcon from '../assets/link.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function DestinationCard({ image, title, description, url, category, morePhoto, onCategoryClick  }) {
    const truncatedDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success("Link copied to clipboard!");
            })
            .catch((err) => {
                console.error("Error copying link: ", err);
                toast.error("Failed to copy the link. Please try again.");
            });
    };

    return (
        <div className="w-full relative flex items-start rounded-lg overflow-hidden lg:my-10 my-1 ">
        <div className="flex-none lg:w-1/5 lg:h-full md:w-1/4 w-1/3 mx-3 lg:mx-10 lg:my-2 my-6">
            <img src={image} alt="Destination" className="rounded-3xl w-full h-48 object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-between h-full mx-3 lg:mx-1 my-5">
            <div>
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="lg:text-xl text-[0.5 rem] font-bold block hover:text-blue-500"
            >
                {title}
            </a>
                <span className="lg:text-xl text-xs text-gray-400 my-2">{truncatedDescription}</span>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block lg:text-xl text-xs text-blue-600  rounded underline"
                    >
                        อ่านต่อ
                    </a>
            </div>
            <div className="my-1">
                <span className="lg:text-xl text-xs text-gray-400"> หมวด </span>
                    {category.map((tag, index) => (
                        <span key={index} className="lg:text-xl text-xs text-gray-400 mr-2 underline cursor-pointer"  onClick={() => onCategoryClick(tag)}> 
                        {index === category.length - 1 && category.length > 1 ? 'และ ' : ''}
                        {tag}</span>
                    ))}
                </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {morePhoto.map((photo, index) => (
                    <img key={index} src={photo} alt={`Additional ${index + 1}`} className=" w-12 h-12 object-cover rounded-xl" />
                ))}
            </div>
            <div className="flex items-end justify-end">
            <img 
            src={copyLinkIcon}
             onClick={handleCopyLink} 
             className="absolute h-6 w-6 lg:absolute lg:h-12 lg:w-12 lg:bottom-4 lg:right-4 cursor-pointer" 
             />
             </div>
        </div>
    </div>
    )
}