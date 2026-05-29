import CustomText from "./CustomText";
import PolymorphicAction from "./PolymorphicAction";
import PolymorphicBadge from "./PolymorphicBadge";
import PolymorphicBox from "./PolymorphicBox";

function PolymorphicPattern() {
  return (
    <div className="mt-4 space-y-8">
      <section className="space-y-3">
        <CustomText as="h1" className="text-2xl font-bold">
          Polymorphic Component Pattern
        </CustomText>
        <CustomText className="text-gray-700">
          A polymorphic component lets you change the rendered HTML element
          with an <span className="font-semibold">as</span> prop while keeping
          the same reusable styling and behavior.
        </CustomText>

        <PolymorphicBox as="aside" className="bg-gray-50">
          <CustomText className="font-semibold">Pattern used here:</CustomText>
          <CustomText className="mt-1 text-sm text-gray-700">
            One component API, different semantic HTML tags.
          </CustomText>
        </PolymorphicBox>
      </section>

      <section className="space-y-4">
        <CustomText as="h2" className="text-xl font-bold">
          1. Text Component: Same UI, Better Semantics
        </CustomText>
        <div className="grid gap-4 md:grid-cols-2">
          <PolymorphicBox>
            <CustomText as="p" className="text-sm text-gray-500">
              Rendered as h1
            </CustomText>
            <CustomText as="h1" className="text-2xl font-bold">
              Product Analytics
            </CustomText>
          </PolymorphicBox>

          <PolymorphicBox>
            <CustomText as="p" className="text-sm text-gray-500">
              Rendered as label
            </CustomText>
            <CustomText
              as="label"
              htmlFor="email"
              className="mb-1 block font-semibold text-gray-800"
            >
              Email address
            </CustomText>
            <input
              id="email"
              className="w-full rounded-sm border border-gray-300 px-3 py-2"
              placeholder="manoj@example.com"
              type="email"
            />
          </PolymorphicBox>
        </div>
      </section>

      <section className="space-y-4">
        <CustomText as="h2" className="text-xl font-bold">
          2. Action Component: Button or Link
        </CustomText>
        <CustomText className="text-sm text-gray-600">
          In real apps, the same visual action may need to submit a form,
          trigger JavaScript, or navigate to another page.
        </CustomText>

        <div className="flex flex-wrap gap-3">
          <PolymorphicAction onClick={() => alert("Saved successfully")}>
            Save changes
          </PolymorphicAction>
          <PolymorphicAction
            as="a"
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Read React docs
          </PolymorphicAction>
          <PolymorphicAction type="button" variant="danger">
            Delete draft
          </PolymorphicAction>
        </div>
      </section>

      <section className="space-y-4">
        <CustomText as="h2" className="text-xl font-bold">
          3. Box Component: Div, Section, Article, Aside
        </CustomText>
        <div className="grid gap-4 md:grid-cols-3">
          <PolymorphicBox as="article">
            <PolymorphicBadge tone="success">Article</PolymorphicBadge>
            <CustomText as="h3" className="mt-3 font-bold">
              Case study card
            </CustomText>
            <CustomText className="mt-1 text-sm text-gray-600">
              Use article when the block can stand alone as content.
            </CustomText>
          </PolymorphicBox>

          <PolymorphicBox as="section">
            <PolymorphicBadge tone="info">Section</PolymorphicBadge>
            <CustomText as="h3" className="mt-3 font-bold">
              Dashboard group
            </CustomText>
            <CustomText className="mt-1 text-sm text-gray-600">
              Use section for a named part of the current page.
            </CustomText>
          </PolymorphicBox>

          <PolymorphicBox as="aside">
            <PolymorphicBadge tone="warning">Aside</PolymorphicBadge>
            <CustomText as="h3" className="mt-3 font-bold">
              Helpful note
            </CustomText>
            <CustomText className="mt-1 text-sm text-gray-600">
              Use aside for supporting information related to the main content.
            </CustomText>
          </PolymorphicBox>
        </div>
      </section>

      <section className="space-y-4">
        <CustomText as="h2" className="text-xl font-bold">
          4. Badge Component: Span or Link
        </CustomText>
        <div className="flex flex-wrap items-center gap-3">
          <PolymorphicBadge tone="success">Paid</PolymorphicBadge>
          <PolymorphicBadge tone="warning">Pending review</PolymorphicBadge>
          <PolymorphicBadge
            as="a"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
            target="_blank"
            rel="noopener noreferrer"
            tone="info"
          >
            HTML elements
          </PolymorphicBadge>
        </div>
      </section>
    </div>
  );
}

export default PolymorphicPattern;
