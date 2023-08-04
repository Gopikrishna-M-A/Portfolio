import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const ResumeButton = () => {
  const handleDownload = () => {
    // Replace "path/to/your/resume.pdf" with the actual path to your resume file
    const resumeFilePath = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.setAttribute("download", "Gopikrishna-resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button className='resume' onClick={handleDownload} icon={<DownloadOutlined />}>
      Download Resume
    </Button>
  );
};

export default ResumeButton;
