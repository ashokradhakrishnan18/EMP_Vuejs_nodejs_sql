
    const uploadfile = require("../../controller/Files/controller_files");


module.exports = UploadFile => {
   UploadFile.post("/api/portal/upload", uploadfile.upload, ()=> {
           console.log('Login Check');
       });
   UploadFile.get("/api/portal/files", uploadfile.getListFiles, ()=> {
           console.log('Login Check');
       });
   UploadFile.get("/api/portal/files/:name", uploadfile.download, ()=> {
           console.log('Login Check');
       });
}