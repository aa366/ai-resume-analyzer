import { prepareInstructions } from "@/constants/index";
import { convertPdfToImage } from "@/lib/pdf2img";
import { generateFeedback } from "@/lib/feedback";
import { generateUUID } from "@/lib/utils";

interface DataTypes {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File;
}

export async function GET() {
    return Response.json({
        success: true,
        data: "THANK YOU"
    },
        { status: 200 })
}

export async function POST(request: Request) {

    try {

        const {
            companyName,
            jobTitle,
            jobDescription,
            file,
        }: DataTypes = await request.json()


        // make an image
        const imageFile = await convertPdfToImage(file);
        if (!imageFile.file) {
            throw new Error("Error: Failed to convert PDF to image")
        }

        // collect data
        const uuid = generateUUID();
        const data = {
            id: uuid,
            resumePath: file.webkitRelativePath,
            imagePath: imageFile.imageUrl,
            companyName,
            jobTitle,
            jobDescription,
            feedback: "",
        };

        // make feedback
        const feedback = await generateFeedback(file.webkitRelativePath, prepareInstructions({ jobTitle, jobDescription }));

        if (!feedback) {
            throw new Error("Error: Failed to analyze resume")
        }



        return Response.json({
            success: true,
            data: feedback
        })

            ;



    } catch (error) {
        console.error(error);
        return Response.json(
            {
                success: false,
                error
            }, { status: 500 })

    }

}




