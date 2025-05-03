import React from 'react'
import {Header, StatsCard, TripCard} from "../../../components";
import  {user, dashboardStats, allTrips} from "../../constants"

const Dashboard = () => {
    const {totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats

    return (
        <main className="dashboard wrapper">
            <Header
            title={`Welcome to the Travel Agency ${user?.name ?? 'Guest'}`}
            description="Track activity, trends and popular destinations"
        />
            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Trips"
                        total = {totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />

                    <StatsCard
                    headerTitle="Active Users Today"
                    total = {userRole.total}
                    currentMonthCount={userRole.currentMonth}
                    lastMonthCount={userRole.lastMonth}
                    />
                </div>
            </section>
            <section className="container">
                <h1 className="text-lg font-semibold text-dark-100">Created Trips</h1>
                <div className="trip-grid">
                    {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice}) => (
                        <TripCard
                        key={id}
                        id={id.toString()}
                        name={name}
                        imageUrl={imageUrls[0]}
                        location = {itinerary?.[0]?.location}
                        />
                    ))}
                </div>

            </section>
        <TripCard/>

        </main>
    )
}
export default Dashboard
