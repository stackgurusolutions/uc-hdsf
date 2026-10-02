import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Guidelines() {
  return (
    <div>
      <section className="py-20 bg-primary border-b border-[#DDD6CE]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Submission Guidelines
          </h1>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Submit your original research and contribute to global discussions on
            heritage, design, culture, and sustainable futures.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <Card className="bg-white border border-[#D6D1CB] shadow-sm rounded-xl mb-16 overflow-hidden">
              <CardContent className="p-10">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Full Paper Submission Instructions
                  </h2>
                  <div className="w-20 h-[2px] bg-black"></div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-10">
                  Authors whose abstracts have been accepted are invited to submit
                  their full papers for peer review. Please read all submission
                  instructions carefully before uploading your manuscript.
                </p>

                <div className="space-y-10">
                  <div className="border border-[#D6D1CB] rounded-lg p-8 bg-[#FAFAFA]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                        <FileText className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-black">
                        1. Final Manuscript – Key Instructions
                      </h3>
                    </div>

                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Who Should Submit:</strong> Authors of accepted papers must
                          revise their manuscripts to address every reviewer’s comment before
                          submitting the final version.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Submission Deadline:</strong> 15 October 2026.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Template:</strong> Use the Springer manuscript template (available on the conference website). Do
                          not reformat or substitute your own layout. 
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Length:</strong> Approximately 10–11 formatted pages,
                          including figures, tables, and references.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Registration:</strong> For each accepted paper, at least one
                          author must register by paying the full registration fee and attend
                          the conference to present the paper.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Important:</strong> Incomplete final submissions will not be
                          processed.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-[#D6D1CB] rounded-lg p-8 bg-[#FAFAFA]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                        <FileText className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-black">
                        2. Final Manuscript Requirements
                      </h3>
                    </div>

                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Author Details:</strong> The final manuscript must include
                          all authors’ full names, current affiliations, and email addresses.
                          The corresponding author’s email must be clearly identified.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Institutional Email:</strong> Please use your official
                          institutional email address wherever possible.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Abstract:</strong> The abstract must not exceed 200 words
                          and must be written as a single flowing paragraph without labelled
                          sections, references, or citations.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Keywords:</strong> Include appropriate keywords following
                          the Springer manuscript template.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Required Content:</strong> The final manuscript must contain
                          the title, authors’ full names, current affiliations, email
                          addresses, clearly identified corresponding author email, abstract,
                          keywords, main content, and references.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-[#D6D1CB] rounded-lg p-8 bg-[#FAFAFA]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                        <FileText className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-black">
                        3. CMT Final Submission – Required Files
                      </h3>
                    </div>

                    <ol className="list-decimal ml-6 space-y-4 text-gray-700">
                      <li>
                        <strong>PaperID_Manuscript.docx</strong> — The complete revised
                        manuscript, including figures and tables, following the Springer
                        template and UC-HDSF guidelines.
                      </li>

                      <li>
                        <strong>PaperID_Manuscript.pdf</strong> — The same manuscript in PDF
                        format.
                      </li>

                      <li>
                        <strong>PaperID_Tracked_Changes.pdf</strong> — A PDF showing all edits
                        made against the reviewed version.
                      </li>

                      <li>
                        <strong>PaperID_Response_to_Reviewers.pdf</strong> — A detailed
                        response addressing each reviewer comment individually, clearly
                        stating where and how the manuscript was changed. A single aggregated
                        response will not be accepted.
                      </li>

                      <li>
                        <strong>PaperID_Figures.zip</strong> — All figures in JPEG format
                        (.jpg or .jpeg) at a minimum of 300 dpi. Figures must be named
                        <strong> Fig1.jpg, Fig2.jpg, </strong> and so on. The ZIP file must not
                        exceed 12 MB.
                      </li>

                      <li>
                        <strong>PaperID_Supplementary_Evidence.pdf</strong> — Material
                        evidencing the work reported, such as survey instruments, interview or
                        observation protocols, datasets, experiment records, field
                        documentation, or coding sheets, as appropriate to the methodology.
                        This material supports verification of the findings and will not be
                        published.
                      </li>
                    </ol>
                  </div>

                  <div className="border border-[#D6D1CB] rounded-lg p-8 bg-[#FAFAFA]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                        <FileText className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-black">
                        4. File Upload Instructions
                      </h3>
                    </div>

                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Through “Edit Submission”:</strong> Replace your earlier
                          files with the revised manuscript files:
                          <strong> PaperID_Manuscript.docx</strong> and
                          <strong> PaperID_Manuscript.pdf</strong>.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Through “Upload Supplementary Material”:</strong> Upload
                          <strong> PaperID_Tracked_Changes.pdf</strong>,
                          <strong> PaperID_Response_to_Reviewers.pdf</strong>,
                          <strong> PaperID_Figures.zip</strong>, and
                          <strong> PaperID_Supplementary_Evidence.pdf</strong>.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Figure Credits:</strong> Any material drawn from another
                          source must carry a full credit line in the caption and, where
                          required, permission to reproduce.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>File Naming:</strong> All six files must be named exactly as
                          specified, using your CMT Paper ID in place of
                          <strong> PaperID</strong> (e.g.,
                          <strong> 261_Manuscript.docx</strong>).
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>
                          <strong>Submission Completeness:</strong> All six required files must
                          be uploaded. Incomplete submissions will not be processed.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 pt-10">
                  <a
                    href="/Springer_full_paper_format_UCHDSF.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-trustnet-primary text-trustnet-primary px-8 py-4 rounded-full font-semibold hover:bg-trustnet-bg transition"
                  >
                    Download Full Paper Template
                  </a>

                  <a
                    href="https://cmt3.research.microsoft.com/UCHDSF2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-trustnet-primary text-trustnet-primary px-8 py-4 rounded-full font-semibold hover:bg-trustnet-bg transition"
                  >
                    Full Paper Submission Portal
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#FAFAFA] border border-[#D6D1CB] shadow-sm rounded-xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Publication & Indexing
                </h2>

                <div className="w-20 h-[2px] bg-black mb-8"></div>

                <p className="text-gray-700 leading-relaxed text-base mb-8">
                  All selected papers will be published in Springer (Scopus-indexed)
                  book series under the proposed title: Urban Cultures - Heritage,
                  Design & Sustainable Futures. A limited number of high-quality
                  papers will be considered for a special issue in TEXTILE: Cloth and
                  Culture (Taylor & Francis, Scopus Q2). Extended versions will be
                  required for journal consideration. All submissions will undergo
                  double-blind peer review.
                </p>

                <img
                  src="/pub-logo.png"
                  alt="Publication and Indexing"
                  className="w-64 md:w-80 mx-auto object-contain mb-6"
                />
              </CardContent>
            </Card>

            <Card className="bg-[#FAFAFA] border border-[#D6D1CB] shadow-sm rounded-xl">
              <CardContent className="p-10">
                <h2 className="text-2xl font-bold text-black mb-4">
                  CMT Acknowledgment
                </h2>

                <div className="w-16 h-[2px] bg-black mb-6"></div>

                <p className="text-gray-700 text-sm leading-6 mb-6">
                  The Microsoft CMT service was used for managing the peer-reviewing
                  process for this conference. This service was provided for free by
                  Microsoft and they bore all expenses, including costs for Azure
                  cloud services as well as for software development and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}