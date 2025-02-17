import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try {
                const response = await axios.get(`/api/property/${id}`);
                setProperty(response.data);
            }
            catch (error) {
                console.error("Error fetching property details:", error);
            }finally{
                setLoading(false);
            }
        }
        fetchProperty();
    }, [id]);
    if (loading) {
        return <p>Loading...</p>
    }
    if (!property){
        return <p>Property not found</p>;
    }
    return <PropertyDetail property={property} />;
}