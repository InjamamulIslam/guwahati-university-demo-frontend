import { ApplicationForm } from '@/components/admissions/ApplicationForm';

export default function ApplyPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-primary mb-4">Apply for Admission</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Complete the application form below to apply for admission to Gauhati University.
                    Please ensure all information is accurate before submission.
                </p>
            </div>
            <ApplicationForm />
        </div>
    );
}
