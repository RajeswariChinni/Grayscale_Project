# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "🧮 BMI Calculator" [level=2] [ref=e3]
  - generic [ref=e4]: Height
  - spinbutton "Height" [ref=e5]
  - combobox [ref=e6]:
    - option "Centimeters (cm)" [selected]
    - option "Inches"
    - option "Feet"
  - generic [ref=e7]: Weight
  - spinbutton "Weight" [ref=e8]
  - combobox [ref=e9]:
    - option "Kilograms (kg)" [selected]
    - option "Pounds"
  - button "Calculate Now" [ref=e10] [cursor=pointer]
```