import {useState} from 'react'
import Axios from "axios";


// useEffect(() => {
//     const [mydata, setdata] = useState([]);
//     Axios.get(baseURL)
//       .then((Response) => {
//         setdata(Response.data);
//         console.log(mydata);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });

  
    export const APIdata= [
      {
        id: 424926,
        sol: 1000,
        camera: {
        id: 22,
        name: "MAST",
        rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg",
        earth_date: "2015-06-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424927,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631190503679E04_DXXX.jpg",
        earth_date: "2015-05-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424927,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631190503679E04_DXXX.jpg",
        earth_date: "2015-05-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424928,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
        earth_date: "2015-07-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      
    ]

