import { brandServiceButton1 } from "@/assets";
import { brandServiceButton2 } from "@/assets";
import { brandServiceButton3 } from "@/assets";
import { productServicesButton1 } from "@/assets";
import { productServicesButton2 } from "@/assets";
import { webServicesButton1 } from "@/assets";
import { webServicesButton2 } from "@/assets";
import { webServicesButton3 } from "@/assets";

export const servicesData = {
  first: {
    title: "Identities",
    description:
      "Craft brand identities from the ground up and transforming raw ideas into cohesive and compelling brand experiences.",
    image:
      brandServiceButton1 ,
    buttons: [
      {
        keys: "Shift + 1",
        label: "identities",
        title: "Identities",
        description:
          "Craft brand identities from the ground up and transforming raw ideas into cohesive and compelling brand experiences.",
        image:
          brandServiceButton1 ,
          video: null
      },
      {
        keys: "Shift + 2",
        label: "Refreshes",
        title: "Visual Refresh",
        description:
          "Give your brand a new look while maintaining its essence and values.",
        image: brandServiceButton2,
        video: null
      },
      {
        keys: "Shift + 3",
        label: "Application",
        title: "Brand Application",
        description: "Applying brand across all digital and print mediums.",
        image: brandServiceButton3,
        video: null
      },
    ],
  },
  second: {
    title: "Design",
    description:
      "Beautiful, intuitive products that users love, built with meticulous attention to detail and focused on delivering exceptional user experiences.",
    image:
      productServicesButton1,

    buttons: [
      {
        keys: "Shift + 1",
        label: "Design",
        title: "Design",
        description: "Beautiful, intuitive products that users love, built with meticulous attention to detail and focused on delivering exceptional user experiences.",
        image: productServicesButton1,
        video: null
      },
      {
        keys: "Shift + 2",
        label: "Research",
        title: "Research",
        description: "Data-driven user research that uncovers real insights, helping you make confident product decisions and reduce time to market.",
        image: productServicesButton2,
        video: null
      },
      {
        keys: "Shift + 3",
        label: "Prototyping",
        title: "Prototyping",
        description: "Interactive prototypes that turn concepts into engaging, seamless, and real-world experiences.",
        video: "/videos/product-button-video-3.mp4",
      },
    ],
  },
  third: {
    title: "Launch",
    description:
      "Compelling product launch videos that showcase your innovation, designed to captivate investors and early adopters.",

    video: "/videos/motion-button-video-1.mp4",

    buttons: [
      {
        keys: "Shift + 1",
        label: "Launch",
        title: "Launch",
        description: "Compelling product launch videos that showcase your innovation, designed to captivate investors and early adopters.",
        video: "/videos/motion-button-video-1.mp4"
      },
      {
        keys: "Shift + 2",
        label: "Interactive",
        title: "Interactive",
        description: "Thoughtfully crafted UI animations that elevate user experiences, bringing interfaces to life with delightful micro-interactions.",
        video: "videos/motion-button-video-2.mp4"
      },
      {
        keys: "Shift + 3",
        label: "Marketing",
        title: "Marketing",
        description: "Engaging product demonstrations and UI animations that communicate value clearly, helping you stand out in a crowded market.",  
        video: "videos/motion-button-video-3.mp4"
      },
    ],
  },
  four: {
    title: "Landing",
    description:
      "Bold, memorable landing pages that make a lasting first impression, turning curious visitors into customers.",
    image:
      webServicesButton1,
    buttons: [
      {
        keys: "Shift + 1",
        label: "Landing",
        title: "Landing",
        description: "Bold, memorable landing pages that make a lasting first impression, turning curious visitors into customers.",
        image: webServicesButton1
      },
      {
        keys: "Shift + 2",
        label: "Content",
        title: "Content",
        description: "Richly crafted blogs and editorial experiences that elevate your brand's voice, creating meaningful connections with your audience through digital-first storytelling.",
        image: webServicesButton2 ,
      },
      {
        keys: "Shift + 3",
        label: "Microsites",
        title: "Microsites",
        description: "Immerse your audience in campaign experiences that push creative boundaries, transforming brand touch points into interactive journeys that users want to explore and share.",
        image: webServicesButton3 ,
      },
    ],
  },
};
