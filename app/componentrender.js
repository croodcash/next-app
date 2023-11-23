"use client";
import Image from 'next/image'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

export default function Home() {
  //const [docs, setDocs] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
  //       headers:{ "Access-Control-Allow-Origin" : "*"}
  //       {
  //         responseType: 'blob', // Important
  //       }
  //     );

  //     const blob = new Blob([response.data], { type: 'application/pdf' });
  //     const blobUrl = URL.createObjectURL(blob);

  //     setDocs([{ uri: blobUrl }]);
  //   };

  //   fetchData();
  // }, []);

  const docs = [
    // { uri: "/api/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" ,
    //   fileType: "pdf"
    // },
    // { uri: "/api/images/4/47/Extlst-test.pptx" ,
    //   fileType: "pptx"
    // },
    // { uri: "/api/faculty/john/classroomrespolicy1.docx" ,
    //   fileType: "docx"
    // },
     { uri: "/pdf-sample.pdf" ,
      fileType: "pdf"
    },
    { uri: "/test-excelaki.xlsx" ,
      fileType: "xlsx"
    },
    { uri: "/Extlst-test.pptx" ,
    fileType: "pptx"
  },
   
    // { 
    //   uri: require(`/Users/ajaib/Salim/work/^Private/next-app/public/pdf-sample.pdf`),
    //   fileData : require(`/Users/ajaib/Salim/work/^Private/next-app/public/pdf-sample.pdf`),
    //   fileType: "pdf" }
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

          <DocViewer pluginRenderers={DocViewerRenderers} documents={docs}
           style={{width: 500, height: 500, color: 'whti', backgroundColor: 'rgba(52, 52, 52, 0.8)'}}
           config={{
            header: {
             disableHeader: false,
             disableFileName: false,
             retainURLParams: false
            }
           }} 
           />
    
    </main>
  )
}
