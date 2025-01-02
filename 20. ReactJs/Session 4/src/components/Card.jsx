//Rendering using functional components and map functions
const cardData = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Document One",
      description: "This is the first document with details about topic one."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Document Two",
      description: "This is the second document covering insights into topic two."
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "Document Three",
      description: "This is an in-depth look into topic three."
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      title: "Document Four",
      description: "This is the fourth document focusing on topic four."
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      title: "Document Five",
      description: "This is the fifth document with information on topic five."
    }
];

export default function Card()
{
    return (
        <>
        <h1 className="text-2xl font-bold text-center mt-4">Functional Card Components</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {
            cardData.map((card) => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden" key={card.id}>
                <img src={card.image} alt="Card Image" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                    <p className="text-gray-600">{card.description}</p>
                </div>
                <h2 className={`text-gray-600 ${((card.id&1)==0)?"text-blue-500":"text-red-500"}`}>This is an {((card.id&1)==0)?("Even"):("Odd")} Number</h2>
            </div>
            ))}
        </div>
        </>
    );
}