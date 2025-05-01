import { Button } from "./components/ui/button"

function App() {
  return (
    <>
      <div className='h-[300px] w-full bg-blue-500 flex justify-center items-center'>
        <p className="bg-red-500 p-4 text-white h-full md:h-1/2 flex items-center">
          This text will change height at 768px viewport width
        </p>
        <Button>Click here vro</Button>
      </div>
    </>
  )
}

export default App
