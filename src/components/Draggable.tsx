import React from "react";
import Draggable from "react-draggable";

class AstroDraggable extends React.Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  render() {
    return (
      <section id="draggable" className=" h-screen bg-neutral-200 p-1 hidden">
        <h1 className=" text-red-600 font-semibold font-ClashGrotesk text-sm lg:text-base xl:text-base handle cursor-pointer">
          arrange by dragging
        </h1>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute top-20 left-2 w-20  handle cursor-pointer"
            src="/images/drag/50 cent.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute top-1 right-1 w-20  handle cursor-pointer"
            src="/images/drag/brandy.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute top-64 right-0 w-1/3 handle cursor-pointer"
            src="/images/drag/essence.png"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute top-1/2 left-0 w-1/3 handle cursor-pointer"
            src="/images/drag/pastpr.png"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className="absolute top-40 left-1/3 w-28  handle cursor-pointer"
            src="/images/drag/davido.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute top-52 left-1/2 w-20  handle cursor-pointer"
            src="/images/drag/diddy.jpeg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-24 right-20 w-20  handle cursor-pointer"
            src="/images/drag/fela.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-1 left-1 w-16 md:w-20 handle cursor-pointer"
            src="/images/drag/jay z.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-1 right-1 w-28  handle cursor-pointer"
            src="/images/drag/Tiwa-5avage.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute  bottom-1/4 right-1/4 w-16  sm:w-36  handle cursor-pointer"
            src="/images/drag/beyonce.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute  bottom-2/4 left-2/3 w-28  sm:w-36  handle cursor-pointer"
            src="/images/drag/wizkid.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-1/3 left-1/4 w-16 lg:w-52 handle cursor-pointer"
            src="/images/drag/jcole.png"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-52 left-1/4  w-1/3 handle cursor-pointer"
            src="/images/drag/unsung.png"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-56 left-4 w-20  sm:w-36  handle cursor-pointer"
            src="/images/drag/whitney.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-2/3 left-4 w-28  sm:w-36 handle cursor-pointer"
            src="/images/drag/rihanna.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-2/4 left-0 w-1/4 handle cursor-pointer"
            src="/images/drag/homag.png"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute  top-0 left-1/2  w-16 sm:w-36  handle cursor-pointer"
            src="/images/drag/Kirk.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-32 left-4 w-28  sm:w-36  handle cursor-pointer"
            src="/images/drag/ne yo.jpg"
            alt=""
          />
        </Draggable>
        <Draggable bounds="parent" handle=".handle">
          <img
            className=" absolute bottom-1 left-1/3 w-28  sm:w-36  handle cursor-pointer"
            src="/images/drag/burna.jpg"
            alt=""
          />
        </Draggable>
      </section>
    );
  }
}

export default AstroDraggable;
