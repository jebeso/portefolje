---
title: "Magic Trackpad 2: Custom gestures in Pop!_OS"
excerpt: "Pop!_OS comes with inbuilt support for Apple Magic Trackpad 2. Touchegg manages gestures in your Pop!-os distribution, so we’ll simply set up a custom config. Following the documentation, we’ll make a custom config for our user"
genre: "IT"
date: "2023-08-13T17:14:07.322Z"
language: "NOR"
ogImage:
  url: ""
---

Pop!_OS comes with inbuilt support for Apple Magic Trackpad 2. Touchegg manages gestures in your Pop!-os distribution, so we’ll simply set up a custom config. Following the documentation, we’ll make a custom config for our user: `mkdir -p ~/.config/touchegg && cp -n /usr/share/touchegg/touchegg.conf ~/.config/touchegg/touchegg.conf` 

Then we’ll edit it: `sudo nano ~/.config/touchegg/touchegg.conf` In this file, you’ll find the default configuration. Let’s edit the gestures to perform actions, click buttons or run scripts!

These are custom gestures I use:
1. Three fingers swipe left => Minimize current window
2. Three finger swipe right => Next track
3. Three finger swipe up/down => Volume control
5. Four finger swipe right => Minimize/maximize current window (custom keyboard shortcut)
6. Pinch four fingers in => Alt+F4
7. Pinch four fingers out => Pause/play
8. Pinch three fingers in => Ctrl+w (close tab)
9. Pinch three fingers out => Ctrl+t (new tab)

Below is the full config:
```
<touchégg>

  <settings>
    <!--
      Delay, in milliseconds, since the gesture starts before the animation is displayed.
      Default: 150ms if this property is not set.
      Example: Use the MAXIMIZE_RESTORE_WINDOW action. You will notice that no animation is
      displayed if you complete the action quick enough. This property configures that time.
    -->
    <property name="animation_delay">150</property>

    <!--
      Percentage of the gesture to be completed to apply the action. Set to 0 to execute actions unconditionally.
      Default: 20% if this property is not set.
      Example: Use the MAXIMIZE_RESTORE_WINDOW action. You will notice that, even if the
      animation is displayed, the action is not executed if you did not move your fingers far
      enough. This property configures the percentage of the gesture that must be reached to
      execute the action.
    -->
    <property name="action_execute_threshold">20</property>

    <!--
      Global animation colors can be configured to match your system colors using HEX notation:

        <color>909090</color>
        <borderColor>FFFFFF</borderColor>

      You can also use auto:

        <property name="color">auto</property>
        <property name="borderColor">auto</property>

      Notice that you can override an specific animation color.
    -->
    <property name="color">auto</property>
    <property name="borderColor">auto</property>
  </settings>

  <!--
    Configuration for every application.
  -->
  <application name="All">
    <gesture type="PINCH" fingers="2" direction="IN">
      <action type="SEND_KEYS">
        <repeat>true</repeat>
        <modifiers>Control_L</modifiers>
        <keys>KP_Subtract</keys>
        <decreaseKeys>KP_Add</decreaseKeys>
      </action>
    </gesture>
    <gesture type="PINCH" fingers="2" direction="OUT">
      <action type="SEND_KEYS">
        <repeat>true</repeat>
        <modifiers>Control_L</modifiers>
        <keys>KP_Add</keys>
        <decreaseKeys>KP_Subtract</decreaseKeys>
      </action>
    </gesture>
    # <gesture type="SWIPE" fingers="3" direction="UP">
    #   <action type="RUN_COMMAND">
    #     <repeat>false</repeat>
    #     <command>dbus-send --session --dest=com.System76.PopShell --type=method_call /com/System76/PopShell com.System76.PopShell.FocusUp</command>
    #     <on>begin</on>
    #   </action>
    # </gesture>

    # <gesture type="SWIPE" fingers="3" direction="DOWN">
    #   <action type="RUN_COMMAND">
    #     <repeat>false</repeat>
    #     <command>dbus-send --session --dest=com.System76.PopShell --type=method_call /com/System76/PopShell com.System76.PopShell.FocusDown</command>
    #     <on>begin</on>
    #   </action>
    # </gesture>

    <gesture type="SWIPE" fingers="3" direction="LEFT">
        <action type="RUN_COMMAND">
            <repeat>false</repeat>
            <command>xdotool key ctrl+y</command>
        </action>
    </gesture>


    <gesture type="SWIPE" fingers="3" direction="RIGHT">
      <action type="SEND_KEYS">
        <keys>XF86AudioNext</keys>
      </action>
    </gesture>

    <gesture type="SWIPE" fingers="3" direction="UP">
        <action type="SEND_KEYS">
            <repeat>true</repeat>
            <keys>XF86AudioRaiseVolume</keys>
        </action>
    </gesture>

    <gesture type="SWIPE" fingers="3" direction="DOWN">
    <action type="SEND_KEYS">
        <keys>XF86AudioLowerVolume</keys>
        <repeat>true</repeat>
    </action>
    </gesture>

    <gesture type="SWIPE" fingers="4" direction="LEFT">
      <action type="RUN_COMMAND">
        <repeat>false</repeat>
        <command>dbus-send --session --dest=com.System76.Cosmic --type=method_call /com/System76/Cosmic com.System76.Cosmic.GestureLeft</command>
        <on>begin</on>
      </action>
    </gesture>

    <gesture type="SWIPE" fingers="4" direction="RIGHT">
      <action type="RUN_COMMAND">
          <repeat>false</repeat>
          <command>xdotool key ctrl+alt+m</command>
          <on>begin</on>
      </action>
    </gesture>

    <gesture type="PINCH" fingers="4" direction="IN">
      <action type="SEND_KEYS">
        <repeat>false</repeat>
        <modifiers>Alt_L</modifiers>
        <keys>F4</keys>
      </action>
    </gesture>

    <gesture type="PINCH" fingers="4" direction="OUT">
      <action type="SEND_KEYS">
        <repeat>false</repeat>
        <keys>XF86AudioPlay</keys>
      </action>
    </gesture>

    <gesture type="PINCH" fingers="3" direction="IN">
      <action type="SEND_KEYS">
        <repeat>false</repeat>
        <modifiers>Control_L</modifiers>
        <keys>w</keys>
      </action>
    </gesture>

    <gesture type="PINCH" fingers="3" direction="OUT">
      <action type="SEND_KEYS">
        <repeat>false</repeat>
        <modifiers>Control_L</modifiers>
        <keys>t</keys>
      </action>
    </gesture>

    <!--
      Gestures for 1:1 workspaces tracking
    -->
    <gesture type="SWIPE" fingers="4" direction="UP"><action type="GNOME_SHELL"></action></gesture>
    <gesture type="SWIPE" fingers="4" direction="DOWN"><action type="GNOME_SHELL"></action></gesture>
  </application>

  <!--
    Application-specific Configuration
  -->
  <application name="gimp-2.10">
    <gesture type="PINCH" fingers="2" direction="IN">
      <action type="RUN_COMMAND">
        <repeat>true</repeat>
        <command>xdotool key minus</command>
        <decreaseCommand>xdotool key plus</decreaseCommand>
      </action>
    </gesture>
    <gesture type="PINCH" fingers="2" direction="OUT">
      <action type="RUN_COMMAND">
        <repeat>true</repeat>
        <command>xdotool key plus</command>
        <decreaseCommand>xdotool key minus</decreaseCommand>
      </action>
    </gesture>
  </application>
  <application name="glimpse-0.2">
    <gesture type="PINCH" fingers="2" direction="IN">
      <action type="RUN_COMMAND">
        <repeat>true</repeat>
        <command>xdotool key minus</command>
        <decreaseCommand>xdotool key plus</decreaseCommand>
      </action>
    </gesture>
    <gesture type="PINCH" fingers="2" direction="OUT">
      <action type="RUN_COMMAND">
        <repeat>true</repeat>
        <command>xdotool key plus</command>
        <decreaseCommand>xdotool key minus</decreaseCommand>
      </action>
    </gesture>
  </application>
  <application name="gnome-terminal">
    <gesture type="PINCH" fingers="2" direction="OUT">
      <action type="RUN_COMMAND">
        <repeat>true</repeat>
        <command>xdotool key Ctrl+Shift+plus</command>
        <decreaseCommand>xdotool key Ctrl+minus</decreaseCommand>
      </action>
    </gesture>
    <gesture type="PINCH" fingers="2" direction="IN">
      <action type="RUN_COMMAND">
        <command>xdotool key Ctrl+minus</command>
        <repeat>true</repeat>
        <animation>CHANGE_DESKTOP_UP</animation>
        <decreaseCommand>xdotool key Ctrl+Shift+plus</decreaseCommand>
      </action>
    </gesture>
  </application>
  <application name="inkscape">
    <gesture type="PINCH" fingers="2" direction="IN">
      <action type="SEND_KEYS">
        <repeat>true</repeat>
        <keys>KP_Subtract</keys>
        <decreaseKeys>KP_Add</decreaseKeys>
      </action>
    </gesture>
    <gesture type="PINCH" fingers="2" direction="OUT">
      <action type="SEND_KEYS">
        <repeat>true</repeat>
        <keys>KP_Add</keys>
        <decreaseKeys>KP_Subtract</decreaseKeys>
      </action>
    </gesture>
  </application>
  <application name="tilix">
    <gesture type="PINCH" fingers="2" direction="IN">
      <action type="RUN_COMMAND">
        <repeat>true</repeat>
        <command>xdotool key Ctrl+minus</command>
        <decreaseCommand>xdotool key Ctrl+Shift+plus</decreaseCommand>
      </action>
    </gesture>
    <gesture type="PINCH" fingers="2" direction="OUT">
      <action type="RUN_COMMAND">
        <repeat>true</repeat>
        <command>xdotool key Ctrl+Shift+plus</command>
        <decreaseCommand>xdotool key Ctrl+minus</decreaseCommand>
      </action>
    </gesture>
  </application>
</touchégg>

```