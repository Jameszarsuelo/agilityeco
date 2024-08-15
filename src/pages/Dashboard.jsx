
import CardDashboard from "../components/CardDashboard";

export default function Dashboard() {
    return (
        <div className="lg:flex lg:flex-row gap-5">
            <CardDashboard />            
            <CardDashboard />            
            <CardDashboard />            
            <CardDashboard />            
            <CardDashboard />            
        </div>
    );
}
