import CreateForm from "./CreateForm";

export default function page() {
  return (
    <main>
        
        {/*------------------- SSR area ----------------*/}
        <h2 className="text-primary text-center" >Add New Article here..</h2>
        {/*------------------- SSR area ----------------*/}

        
        {/*------------------- CSR area ----------------*/}
        <CreateForm></CreateForm>
        {/*------------------- CSR area ----------------*/}
    </main>
  )
}
