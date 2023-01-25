### @activities true
### @explicitHints true

# ERPS STEM WEEK :: Street Lamp - Light Detection

## Introduction
### Introduction Step @unplugged
In the first challenge with our street lamp, we got the light to go on and off with the push of a button.  

That's great, but what about making our light a bit smarter? How about only turning the light on when it's dark enough that we need it?  
  
**Q. What would be the main benefits of doing this?**  
**Q. What other mechanisms could we use to turn a lamp on and off?**
  
In this tutorial, we're going to use the *phototransistor* on the top of our light to check the light level...

![Lamp Bit](https://raw.githubusercontent.com/niaxotim/erps-street-lamp-light-detection/master/assets/lamp_bit.png)

## Converting light to numbers!
### Converting our light values @unplugged
So what does the *phototransistor* actually do? It converts the light level in to a *voltage* reading.  
  
The phototransistor gives us a reading from 0V (no light) to 3V (very bright). Our micro:bit then converts this value to a number between 0 and 1023, using 
an *Analogue to Digital Converter* (ADC).  
  
We can use this knowledge to tell our micro:bit when to turn the lamp on and off!

![Light Levels](https://raw.githubusercontent.com/niaxotim/erps-street-lamp-light-detection/master/assets/light_levels.png)


## Reading the light levels
### Step 1
We want our street light to behave in a clever way forever... well, until we turn the micro:bit off of course ;)  
  
So let's start with a ``||basic:forever||`` block.

#### ~ tutorialhint
```blocks
basic.forever(function() {})
```

### Step 2
Next, we need to *conditionally* check what our light level is. We do that with a ``||logic:if-else||`` block.  
  
Drag one of them in to our ``||basic:forever||`` block.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (true) {
    } else {
    }
})

```

### Step 3
Next, we need to check what the current light level is. There's a handy shortcut we can use with the ``||Kitronik_LAMPbit.Read Light level||`` block.  

But first, we need some way of comparing it. So drag a ``||logic:0 < 0||`` block in to replace where we currently have 'true' in our ``||logic:if-else||`` block.  
  
Now change the function to '<=', and drag a ``||Kitronik_LAMPbit.Read Light level||`` block to the left hand side.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_LAMPbit.lightLevel() <= 0) {
    } else {
    }
})

```

### Step 4
We need to decide when at what light level our light should turn on, and off.  
  
Earlier, we discovered that our micro:bit converts our light levels in to a number between 0 and 1023. That's 1024 possible values. 
So how about we choose the mid-point?  1024 divided by 2 is 512.  
  
Change the right hand side of our comparison operator to 512.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_LAMPbit.lightLevel() <= 512) {
    } else {
    }
})

```

### Step 5
Now we need to turn our lamp on when this condition is met.  
  
Use a ``||Kitronik_LAMPbit.Turn Lamp Light On||`` block inside our condition.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_LAMPbit.lightLevel() <= 512) {
        Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.On)
    } else {
    }
})

```

### Step 6
Can you add the right code to now make the light turn off if it is too bright?

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_LAMPbit.lightLevel() <= 512) {
        Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.On)
    } else {
        Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.Off)
    }
})

```

### Step 7
Connect your BBC micro:bit and click ``|Download|`` to transfer your code.  

Make sure that your micro:bit is powered on.  If the room is bright, you might find that your lamp stays off.  

But what if you cover the phototransistor on the top of the lamp? Does your lamp come on now?

### Barrier Basic Tutorial Complete @unplugged
Great work! You've now got a street lamp that is sensitive to the light level!  

Make sure you have a think about why this is a better solution to just turning the lamp on and off with a switch!  
![Great job](https://raw.githubusercontent.com/niaxotim/erps-street-lamp-light-detection/master/assets/great_job.png)
