export interface IHotelBase {
    hotel_id: string;
    name: string;
    title?: string;
    description?: string;
    type?: string;
    city?: string;
    state?: string;
    address: string;
    zip?: string;
    owner_info?: {
        name?: string;
        mobile?: string;
        email?: string;
    };
    manager_info?: {
        name?: string;
        mobile?: string;
        email?: string;
    };
    hotel_admin_user?: string;
    subscription?: {
        plan: 'FREE' | 'BASIC' | 'PREMIUM' | 'ENTERPRISE';
        start_date?: Date;
        end_date?: Date;
        is_active: boolean;
        features?: any[];
    };
    settings?: {
        check_in_time: string;
        check_out_time: string;
        currency: string;
        tax_rate: number;
        cancellation_policy?: string;
        advance_payment_percentage: number;
        booking_buffer_hours: number;
    };
    business_info?: {
        gst_number?: string;
        pan_number?: string;
        business_name?: string;
        business_type?: 'HOTEL' | 'RESORT' | 'GUEST_HOUSE' | 'HOMESTAY' | 'HOSTEL' | 'LODGE';
        license_number?: string;
        bank_details?: Record<string, any>;
    };
    contact_persons?: Array<{
        name?: string;
        designation?: string;
        mobile?: string;
        email?: string;
        is_primary?: boolean;
    }>;
    social_media?: {
        website?: string;
        facebook?: string;
        instagram?: string;
        twitter?: string;
        google_maps_link?: string;
    };
    statistics?: {
        total_bookings: number;
        total_revenue: number;
        average_rating: number;
        total_reviews: number;
    };
    distance?: number;
    images?: any[];
    rating?: number;
    rooms?: any[];
    features?: Record<string, any>;
    hotel_code?: string;
    since?: Date;
    mobile?: number;
    email?: string;
    amenities?: string[];
    created_by?: string;
    featured: boolean;
    reviews?: Array<{
        user?: string;
        rating?: number;
        comment?: string;
    }>;
    is_camp: boolean;
    created_at?: Date;
    isDeleted: boolean;
    updated_at?: Date;
    is_active: boolean;
}
