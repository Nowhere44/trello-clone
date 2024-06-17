import { ClerkProvider } from "@clerk/nextjs";

const PlateformLayout = ({ params, children }: { params: { id: string }, children: React.ReactNode }) => {
    return <ClerkProvider>
        {children}
    </ClerkProvider>;
}
export default PlateformLayout;
