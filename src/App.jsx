import { Sidebar } from '@/components/ui/sidebar'
import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



function App() {
  return (
    <div >
      <SidebarProvider>
        {/* Sidebar component */}
        <AppSidebar />

        {/* Content */}


        {/* Sidebar trigger */}
        <SidebarTrigger />
        <div className='product'>

        <h1
  className="text-4xl font-bold"
  style={{
   
    fontWeight: 500,
    color: "var(--text-color)",
    background: "linear-gradient(to right, #4285f4, #d96570)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }}
>
  Your Product Dashboard
</h1>

<br/>

<div className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#F3F3F3"
  >
    <path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z" />
  </svg>
  <p className="text-left text-gray-400 text-lg">Your Recent Listing</p>
</div>


<br/>


<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3"><img src='./images/1.webp' className='rounded-lg max-h-80 '></img></CarouselItem>
    <CarouselItem className="basis-1/3"><img src='./images/2.jpg'  className='rounded-lg max-h-80 '></img></CarouselItem>
    <CarouselItem className="basis-1/3"><img src='./images/3.jpg'   className='rounded-lg max-h-80 '></img></CarouselItem>
    <CarouselItem className="basis-1/3"><img src='./images/4.jpg' className='rounded-lg max-h-80 '></img></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
 

<br/>

<div className="flex items-center space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
  <p className="text-left text-gray-400 text-lg">Edit your current listing</p>
</div>
<br/>

<div className="flex justify-center items-center space-x-4">
<Card className="w-[350px] bg-[#1C1C1C] border border-black text-white">
      <CardHeader>
        <CardTitle>Create New Listing</CardTitle>
        <CardDescription className='text-left'>Post a new product with advanced listing technology.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <img src='./images/list1.jpg'className='rounded-lg h-46' />
              <Label htmlFor="name" className='text-left'>Magekey 1700</Label>
              <Input id="name" placeholder="Edit your Listing" className='border-[1C1C1C]' />
            </div>
            <div className="flex flex-col space-y-1.5">

             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="" className='text-white bg-[#1C1C1C] rounded-xl'>Cancel</Button>
        <Button className='bg-blue-600 rounded-xl'>Next</Button>
      </CardFooter>
    </Card>

    <Card className="w-[350px] bg-[#1C1C1C] border border-black text-white">
      <CardHeader>
        <CardTitle>Create New Listing</CardTitle>
        <CardDescription className='text-left'>Post a new product with advanced listing technology.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <img src='./images/list2.jpg' className='rounded-lg h-50'/>
              <Label htmlFor="name" className='text-left'>Amazon Basics 1200</Label>
              <Input id="name" placeholder="Edit your Listing" className='border-[1C1C1C]' />
            </div>
            <div className="flex flex-col space-y-1.5">

             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="" className='text-white bg-[#1C1C1C] rounded-xl'>Cancel</Button>
        <Button className='bg-blue-600 rounded-xl'>Next</Button>
      </CardFooter>
    </Card>
    </div>

<br/>

</div>
      </SidebarProvider>
    </div>
  )
}

export default App
