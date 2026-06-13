export interface LeaderItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const DEFAULT_LEADER_DATA: LeaderItem[] = [
    {
        id: "1",
        title: "Dr. Adrian Pratama",
        description: "Kepala Sekolah",
        imageUrl: "/images/leader-adrian.png"
    },
    {
        id: "2",
        title: "Sarah Wijaya, M.Pd.",
        description: "Wakil Kepala Bidang Akademik",
        imageUrl: "/images/leader-sarah.png"
    },
    {
        id: "3",
        title: "Budi Hartono, S.T.",
        description: "Wakil Kepala Bidang Kesiswaan",
        imageUrl: "/images/leader-budi.png"
    }
];
