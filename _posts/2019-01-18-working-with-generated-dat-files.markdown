---
title:  "Working with Generated DAT Files"
category: introduction
excerpt: "This tutorial will walk you through how to get your code to be compatible with the Automatic Knit functions in KnitPaint using [small-square.knitout](https://github.com/textiles-lab/knitout-backend-swg/blob/master/examples/small-square.knitout) as an example."
---

So, here's where you are in your Knitout journey:

* You've started learning [Knitout](https://github.com/textiles-lab/knitout)
* You've contacted Jim McCann at the Carnegie Mellon Textiles Lab to receive access to the [knitout-backend-swg Github repository](https://github.com/textiles-lab/knitout-backend-swg)
* You've converted your .knitout files to .DAT files and transferred them via USB to an SDS-ONE APEX3 computer
* You've double-clicked the files to open in KnitPaint

{% include figure image_path="/assets/images/opened_square.JPG" alt="small-square.knitout after just opening" caption="It opened! Great!" %}

Basically, you're ready to roll. The only problem is, when you run the Automatic Knit function and go through the steps, you get some incoherent message, like "Unavailable color no. is drawn on fixed data." 

***What the heck?!***

Your problem might be that, even though Knitout is machine-agnostic, the knitout-backend-swg code is geared exclusively towards to SWG-N2 grade-knitting machines. 

If you ***have*** a SWG-N2 grade-knitting machine, awesome! Change your machine selection in the Automatic Knit pop-up using the Change M/C button and skip to [Step #4](#step4).

But if you ***don't*** have a SWG-N2, worry not! You may be able to still work with your generated code by regenerating the option lines and header information using KnitPaint.

This tutorial will walk you through how to get your code to be compatible with the Automatic Knit functions in KnitPaint using [small-square.knitout](https://github.com/textiles-lab/knitout-backend-swg/blob/master/examples/small-square.knitout) as an example.

[//]: <> (Add instructions for changing document-level machine?)

**Note:** This post merely represents a stop-gap for development until there is progress to extend knitout-backend-swg to work with more machine types.<br/><br/>Headers and option lines are **important** and I honestly don't know what issues I might be introducing by replacing the Knitout-generated lines with Knitpaint-generated ones.
{: .notice--warning}


# Buttons to Know

I used only a handle of functions while creating this blog post. Here's where to find them in the KnitPaint interface:

{% include figure image_path="/assets/images/buttons-01.png"%}


# 1. Select and Copy the Main Portion of Your Design

Click the Area button in the side menu. Drag it around the centre part of the design, as shown below, not including the first few lines up to the short line with a teal square. Agree to the pop-up when it comes up. The dotted line representing the area selected will disappear. Hold down **Ctrl** and **C** to copy it. 

In this example, I chose to retain the top two lines (the yellow and green), but I don't think this is necessary.

{% include figure image_path="/assets/images/select_area_after_cast_on.JPG" alt="the selected pattern with area pop-up visible" caption="The selected portion of the pattern and options dialog." %}


# 2. Paste the Selection Onto a New Page

Click the New Page button in the top menu. Hold down **Ctrl** and **V** to paste your selection. You may have to zoom and pan to better see your selection. You can find these buttons in the side menu.

{% include figure image_path="/assets/images/small_square_zoomed_and_panned.JPG" alt="the selected portion of the pattern pasted into a new document" caption="The selected portion of the pattern pasted into an otherwise blank document." %}


# 3. Generate Option Lines

If you are using small-square.knitout, you'll need to add another line to the bottom of the pattern. As a machine knitting newbie, I don't exactly know *why*, but KnitPaint needs a patterns to be a particular height depending on the type of stitches. To fix the issue, copy the last line of the pattern using the Area tool and paste it onto the end of the pattern. If you don't, you'll get an error message saying "Right side end error !!"

Click the Area Button again. Drag it around your entire pattern, but this time make sure you **do not** select any blank lines above or below your pattern, but **you do** have at least one blank line to the left and right of your design.

{% include figure image_path="/assets/images/new_line_area_selection.JPG" alt="the selected pattern portion with a new line added to the bottom of the pattern" caption="The amount of space to the left and right of the pattern doesn't matter. Also note the addition of one line at the bottom of the pattern." %}

Click the Generate Option Lines buttons in the side menu. A menu will pop up with a bunch of options. Press "Exec." This will generate option and header lines, as well as rows of lines at the bottom of the pattern representing ribbing and a cast-on sequence.

{% include figure image_path="/assets/images/new_line_option_lines.JPG" alt="option lines and header lines have been generated around the existing pattern" caption="Behold: KnitPaint-generated option lines!" %}

<a name="step4"></a>
# 4. Automatic Knit 

Click the Automatic Knit button. An Area selection guide will pop up. If the middle portion of your pattern (i.e., sans options lines) isn't selected, click in the middle of the middle portion and click "OK." A new menu will appear.

{% include figure image_path="/assets/images/new_line_auto_process_2.JPG" alt="one of the option menus that appears after clicking the Automatic Knit button" caption="The second menu you encounter after clicking the Automatic Knit button." %}

Click "Execute Auto." And then, on the next menu, click "Execute."


# 5. Enjoy your (Hopefully) Error-free Knit

You can now do things like click "Simulation Start" to view breaking errors, or "Knitting Assist" to view potential errors you may encounter while knitting with the machines.

{% include figure image_path="/assets/images/no_errors.JPG" alt="the Knit Simulation pop-up" caption="Whoo hoo! No errors!" %}





