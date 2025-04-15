import Card from "../Components/Card";
const DashboardHome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        <Card
          icon="💵"
          title="Main Balance"
          amount="&#8358;500,000.00"
          className="bg-gradient-to-br from-purple-800 via-purple-900 to-purple-700 text-white backdrop-blur hover:rotate-[1deg] hover:brightness-110 transition duration-300 ease-in-out"
        />
        <Card
          icon="📦"
          title="Investment"
          amount="&#8358;0.00"
          className=" text-purple-700 hover:rotate-[1deg] hover:brightness-110 transition duration-300 ease-in-out"
        />
        <Card
          icon="🪙"
          title="Loans"
          amount="&#8358;0.00"
          className="bg-gradient-to-t from-yellow-500 to bg-yellow-300 text-white hover:rotate-[1deg] hover:brightness-110 transition duration-300 ease-in-out"
        />
        <Card
          icon="💰"
          title="Savings"
          amount="&#8358;0.00"
          className="bg-gradient-to-br from-green-600 via-green-900 to-green-200 text-white hover:rotate-[1deg] hover:brightness-110 transition duration-300 ease-in-out"
        />
      </div> <hr />
    </div>
  );
};

export default DashboardHome;
