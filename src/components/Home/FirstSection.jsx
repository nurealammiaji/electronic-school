import { Link } from "react-router-dom";
import image from "../../assets/photos/Illustration.png";

const FirstSection = () => {
    return (
        <div className="bg-green-100">
            <div className="flex items-center gap-8">
                <div>
                    <br /><br /><br /><br />
                    <p className="mb-5 text-2xl text-orange-500">Are you ready to learn ?</p>
                    <br />
                    <div className="text-5xl font-extrabold">
                        <h1 className="mb-3">Learn With fun</h1>
                        <h1>on <span className="text-green-500">any schedule</span></h1>
                    </div>
                    <br /><br />
                    <p className="text-xl">Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Adipisci, laborum.</p>
                    <br /><br />
                    <Link to="/courses"><button className="py-2 text-xl text-white bg-green-500 px-7 rounded-3xl">Get Started</button></Link>
                </div>
                <div className="w-6/12">
                    <img className="w-auto" src={image} alt="" />
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default FirstSection;