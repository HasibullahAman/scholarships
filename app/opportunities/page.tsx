import Card1 from "@/components/opportunities/01_Card";
import Card2 from "@/components/opportunities/02_Card";
import Card3 from "@/components/opportunities/03_Card ";
import Card4 from "@/components/opportunities/04_Card";
import Card5 from "@/components/opportunities/05_Card";
import Card6 from "@/components/opportunities/06_Card";

const page = () => {
    return (
        <>
            {/* // first Section */}
            <div className="flex flex-col items-center h-[50%]">
                {/* Left Side - Image */}
                <div className="grid grid-cols-1 sm:grid-cols-2 w-[80%] lg:grid-cols-3 gap-4 p-4">

                    {/* First Card */}
                    <Card1 />


                    {/* Second Card */}
                    <Card2 />



                    {/* third Card */}
                    <Card3 />

                </div>


                {/* Zigzag Bottom Divider (flip vertically) */}
                <div style={{ height: '30px', overflow: 'hidden', width: '100%' }}>
                    <svg
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                        style={{ height: '100%', width: '100%' }}
                    >
                        <polygon
                            fill="#f8f9fa"
                            points="0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0"
                        />
                    </svg>
                </div>
            </div>



            {/* // Second section */}
            <div className="flex flex-col items-center h-[50%]">
                {/* Zigzag Top Divider */}
                <div style={{ height: '30px', overflow: 'hidden', width: '100%' }}>
                    <svg
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                        style={{ height: '100%', width: '100%' }}
                    >
                        <polygon
                            fill="#f8f9fa"
                            points="0,10 5,0 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55,0 60,10 65,0 70,10 75,0 80,10 85,0 90,10 95,0 100,10"
                        />
                    </svg>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-[80%] lg:grid-cols-3 gap-4 p-4">

                    {/* Second row first Card */}
                    <Card4 />



                    {/* Second Row second Card */}
                    <Card5 />



                    {/* Second row Third Card */}
                    <Card6 />

                </div>


                {/* Zigzag Bottom Divider (flip vertically) */}
                <div style={{ height: '30px', overflow: 'hidden', width: '100%' }}>
                    <svg
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                        style={{ height: '100%', width: '100%' }}
                    >
                        <polygon
                            fill="#f8f9fa"
                            points="0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0"
                        />
                    </svg>
                </div>
            </div>



            {/* // Third section */}
            <div className="flex flex-col items-center h-[50%]">
                {/* Zigzag Top Divider */}
                <div style={{ height: '30px', overflow: 'hidden', width: '100%' }}>
                    <svg
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                        style={{ height: '100%', width: '100%' }}
                    >
                        <polygon
                            fill="#f8f9fa"
                            points="0,10 5,0 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55,0 60,10 65,0 70,10 75,0 80,10 85,0 90,10 95,0 100,10"
                        />
                    </svg>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-[80%] lg:grid-cols-3 gap-4 p-4">

                    {/* Second row first Card */}
                    <Card4 />



                    {/* Second Row second Card */}
                    <Card5 />



                    {/* Second row Third Card */}
                    <Card6 />

                </div>


                {/* divider */}
                <div style={{ height: '150px', overflow: 'hidden', width: '100%' }}>
                    <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        style={{ height: '100%', width: '100%' }}
                    >
                        <path
                            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
                            style={{ stroke: 'none', fill: '#f8f9fa' }}
                        ></path>
                    </svg>
                </div>
            </div>

        </>

    )
}

export default page;