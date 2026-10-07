

const MyPlanPage = async ({ params }) => {
    const { id } = await params;

    const response = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    console.log(data);

    return (
        <div>
            <h1>My Plan Page: {data.id}</h1>
        </div>
    );
};

export default MyPlanPage;
