import React from 'react';

type TalentCardProps = {
    name: string;
    username: string;
    role: string;
    image: string;
};

const TalentCard: React.FC<TalentCardProps> = ({ name, username, role, image }) => {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img className="w-full rounded-t-lg" src={image} alt={`Profile of ${name}`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }} />
            <div className="px-6 py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}

                        <img className="w-10 h-10 rounded-full border border-gray-200" src={image} alt={`Avatar of ${name}`} />
                    </div>
                    <div className="flex-1">
                        <div className="font-bold text-xl mb-1">{name}</div>
                        <p className="text-gray-700 text-sm">@{username}</p>
                    </div>
                </div>
                <p className="text-gray-700 text-sm mt-2">
                    {role}
                </p>
            </div>
        </div>
    );
};

export default TalentCard;
