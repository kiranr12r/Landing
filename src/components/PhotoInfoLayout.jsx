import React from 'react';
import photo from '../assets/profile.jpg'; // Adjust the path according to your project structure

const PhotoInfoLayout = () => {
    return (
        <div className="flex items-center justify-between p-5 mb-5">
            <div className="w-1/3">
                <img
                    src={photo}
                    alt="Photo"
                    className="w-full h-auto rounded-lg"
                />
            </div>
            <div className="w-2/3 ml-5">
                <h2 className="text-2xl font-semibold mb-4">ನಮ್ಮಲ್ಲಿ ಎಲ್ಲಾ ತರಹದ ವೆಲ್ಡಿಂಗ್ ಲೆಥ್ ಕಟಿಂಗ್ ಕೆಲಸ ಮಾಡಿಕೊಡುತ್ತೇವೆ</h2>
                <p className="text-lg text-gray-600 mb-6">
                7ನೆ ಕಲ್ಲು ಹದಡಿ ರಸ್ತೆ ದಾವಣಗೆರೆ.
                </p>
                <ul className="list-none space-y-2">
                    <li className="text-md">ವೆಲ್ಡಿಂಗ್</li>
                    <li className="text-md">ಕಟ್ಟಿಂಗ್</li>
                    <li className="text-md">ಲೇಥ್ ವರ್ಕ್</li>
                </ul>
            </div>
        </div>
    );
};

export default PhotoInfoLayout;
