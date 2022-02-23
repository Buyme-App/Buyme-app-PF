import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const API_URL = "https://77em4-8080.sse.codesandbox.io";
const UPLOAD_ENDPOINT = "upload_files";

export default function Editor({ handleChange, ...props }) {
  //   function uploadAdapter(loader) {
  //     return {
  //       upload: () => {
  //         return new Promise((resolve, reject) => {
  //           const body = new FormData();
  //           loader.file.then((file) => {
  //             body.append("files", file);
  //             // let headers = new Headers();
  //             // headers.append("Origin", "http://localhost:3000");
  //             fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
  //               method: "post",
  //               body: body
  //               // mode: "no-cors"
  //             })
  //               .then((res) => res.json())
  //               .then((res) => {
  //                 resolve({
  //                   default: `${API_URL}/${res.filename}`
  //                 });
  //               })
  //               .catch((err) => {
  //                 reject(err);
  //               });
  //           });
  //         });
  //       }
  //     };
  //   }
  //   function uploadPlugin(editor) {
  //     editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
  //       return uploadAdapter(loader);
  //     };
  //   }
  const custom_config = {
    // extraPlugins: [ MyCustomUploadAdapterPlugin ],
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "|",
        "link",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "blockQuote",
        "|",
        "insertTable",
        "|",
        "imageUpload",
        "mediaEmbed",
        "|",
        "undo",
        "redo",
      ],
    },
    // table: {
    //   contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
    // }
  };
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={custom_config}
        data=""
        onChange={(event, editor) => {
          const description = editor.getData();
          console.log({ event, editor, description });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}
