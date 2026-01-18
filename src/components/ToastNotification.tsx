"use client";

import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const ToastNotification = () => {
  useEffect(() => {
    // Show toast notification about analytics tracking
    toast.success(
      "This website tracks analytics to improve user experience. By continuing to use this site, you consent to this tracking as outlined in our privacy policy.",
      {
        duration: 8000,
        position: "bottom-right",
        style: {
          maxWidth: "400px",
        }
      }
    );
  }, []);

  return null;
};

export default ToastNotification;