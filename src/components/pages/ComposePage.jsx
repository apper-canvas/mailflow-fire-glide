import React from "react";
import { useLocation, useParams } from "react-router-dom";
import EmailComposer from "@/components/organisms/EmailComposer";

const ComposePage = () => {
  const location = useLocation();
  const { draftId } = useParams();
  const { replyTo, forwardEmail } = location.state || {};

  return (
<div className="flex-1 overflow-hidden">
      <EmailComposer 
        replyTo={replyTo} 
        forwardEmail={forwardEmail}
      />
    </div>
  );
};

export default ComposePage;