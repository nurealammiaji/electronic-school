import image from "../../assets/photos/Illustration.png"

const FirstSection = () => {
    return (
        <div className="bg-green-100">
            <div className="flex items-center gap-2">
                <div>
                    <br /><br /><br /><br />
                    <p className="mb-5 text-3xl text-orange-500">Are you ready to learn ?</p>
                    <br />
                    <div className="font-extrabold text-7xl">
                        <h1 className="mb-3">Learn With fun</h1>
                        <h1>on <span className="text-green-500">any schedule</span></h1>
                    </div>
                    <br />
                    <p className="text-2xl">Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Adipisci, laborum.</p>
                    <br />
                    <button className="px-8 py-4 text-2xl text-white bg-green-500 rounded-3xl">Get Started</button>
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