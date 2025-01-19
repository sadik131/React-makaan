export interface PropCardProps {

    data: {
        img: string;
        price: number;
        title: string;
        location: string;
        facility: {
            size: number;
            bed: number;
            bath: number;
        };

    };
}