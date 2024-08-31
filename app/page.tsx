import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { ImageBlock } from "@/components/shared/image-block";
import { TextBlock } from "@/components/shared/text-block";

export default function Home() {
    return (
        <main>
            <Header />

            <div className="mt-10">
                <Container className="flex items-center justify-center h-[300px]">
                    <TextBlock title="About us">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab ipsa quod dolorum veniam dignissimos rerum distinctio
                        ducimus ex reiciendis beatae.
                    </TextBlock>
                    <ImageBlock src="/assets/images/mountains.png" />
                </Container>
            </div>
        </main>
    );
}
