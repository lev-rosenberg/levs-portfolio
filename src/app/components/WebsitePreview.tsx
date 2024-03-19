import { Context } from "../context";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function WebsitePreview() {
  const { state, dispatch } = useContext(Context);
  const [url, setUrl] = useState(state.project.projectUrl);
  const [description, setDescription] = useState(state.project.projectTitle);

  useEffect(() => {
    setUrl(state.project.projectUrl);
    setDescription(state.project.projectTitle);
  }, [state.project]);

  function handleExitProject() {
    dispatch({
      type: "SET_PROJECT",
      payload: { projectUrl: null, projectTitle: null },
    });
  }
  const display = url == null ? "none" : "";

  return (
    <div className="right-page" style={{ display: display }}>
      <button
        className="self-end w-fit rounded-full mb-1"
        onClick={handleExitProject}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="iframe-outer">
        <div className="iframe-inner flex">
          {url === "" ? (
            <div className="self-center m-10 text-center w-full">
              <h2 className="text-4xl mb-5">
                Oh no! There is no preview available for this project.
              </h2>
              <p className="text-2xl">
                This could be due to authentication barriers, or maybe I just
                haven&apos;t updated the link yet. Please open the project in a
                different tab to view it by clicking one of the icons.
              </p>
            </div>
          ) : (
            <iframe id="preview-iframe" src={url} title={description}></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
